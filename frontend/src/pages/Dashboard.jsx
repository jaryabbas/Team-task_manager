import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format, isAfter } from 'date-fns';
import { useAuth } from '../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState({ totalProjects: 0, totalTasks: 0, completedTasks: 0, overdueTasks: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [projectsRes, tasksRes] = await Promise.all([
        axios.get(`${API_URL}/projects`),
        axios.get(`${API_URL}/tasks`)
      ]);
      
      // ✅ FIX: Ensure data is always an array
      const projectsData = Array.isArray(projectsRes.data) ? projectsRes.data : [];
      const tasksData = Array.isArray(tasksRes.data) ? tasksRes.data : [];
      
      console.log('Projects data:', projectsData);
      console.log('Tasks data:', tasksData);
      console.log('Is projects array?', Array.isArray(projectsData));
      console.log('Is tasks array?', Array.isArray(tasksData));
      
      setProjects(projectsData);
      setTasks(tasksData);
      
      const now = new Date();
      const overdue = tasksData.filter(t => t.status !== 'Completed' && isAfter(now, new Date(t.dueDate)));
      setStats({
        totalProjects: projectsData.length,
        totalTasks: tasksData.length,
        completedTasks: tasksData.filter(t => t.status === 'Completed').length,
        overdueTasks: overdue.length
      });
    } catch (error) {
      console.error('Fetch error:', error);
      setProjects([]);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Safety check - ensure tasks is array before filtering
  const tasksList = Array.isArray(tasks) ? tasks : [];
  
  const getTasksByStatus = (status) => tasksList.filter(t => t.status === status);

  if (loading) return <div className="spinner"></div>;

  const statCards = [
    { title: 'Total Projects', value: stats.totalProjects, color: '#667eea' },
    { title: 'Total Tasks', value: stats.totalTasks, color: '#764ba2' },
    { title: 'Completed', value: stats.completedTasks, color: '#10b981' },
    { title: 'Overdue', value: stats.overdueTasks, color: '#ef4444' }
  ];

  return (
    <div className="container" style={{ padding: '32px 24px' }}>
      <h1 style={{ color: 'white', marginBottom: '8px', fontSize: '32px' }}>Dashboard</h1>
      <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px' }}>Overview of your projects and tasks</p>
      
      <div className="dashboard-grid">
        {statCards.map(stat => (
          <div key={stat.title} className="glass-card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#6b7280', fontSize: '14px', marginBottom: '12px' }}>{stat.title}</h3>
            <p style={{ fontSize: '48px', fontWeight: 'bold', color: stat.color }}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="dashboard-grid" style={{ marginTop: '32px' }}>
        {['Pending', 'In Progress', 'Completed'].map(status => (
          <div key={status} className="glass-card">
            <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>{status}</h3>
            {getTasksByStatus(status).slice(0, 5).map(task => (
              <div key={task._id} style={{ padding: '12px', borderBottom: '1px solid #e5e7eb' }}>
                <p style={{ fontWeight: '500', marginBottom: '4px', color: '#1f2937' }}>{task.title}</p>
                <small style={{ color: '#6b7280' }}>Due: {task.dueDate ? format(new Date(task.dueDate), 'MMM dd, yyyy') : 'No date'}</small>
              </div>
            ))}
            {getTasksByStatus(status).length === 0 && <p style={{ color: '#9ca3af', textAlign: 'center', padding: '20px' }}>No tasks</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;