"use client";

import { useEffect, useState } from "react";
import { Trash2, Eye } from "lucide-react";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/contact', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setLeads(data);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setLeads(leads.filter(lead => lead._id !== id));
        if (showModal) setShowModal(false);
      }
    } catch (error) {
      console.error('Error deleting lead:', error);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        setLeads(leads.map(lead => 
          lead._id === id ? { ...lead, status } : lead
        ));
        if (selectedLead && selectedLead._id === id) {
          setSelectedLead({ ...selectedLead, status });
        }
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const openModal = (lead) => {
    setSelectedLead(lead);
    setShowModal(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'read': return 'bg-blue-500/20 text-blue-400';
      case 'responded': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-white/50">Loading leads...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-serif text-white mb-2">Leads</h1>
        <p className="text-white/50 text-sm">Manage your contact form submissions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-4">
          <p className="text-white/50 text-sm mb-1">Total Leads</p>
          <p className="text-3xl font-serif text-white">{leads.length}</p>
        </div>
        <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-4">
          <p className="text-white/50 text-sm mb-1">Pending</p>
          <p className="text-3xl font-serif text-yellow-400">
            {leads.filter(l => l.status === 'pending').length}
          </p>
        </div>
        <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-4">
          <p className="text-white/50 text-sm mb-1">Responded</p>
          <p className="text-3xl font-serif text-green-400">
            {leads.filter(l => l.status === 'responded').length}
          </p>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-white/50 text-xs uppercase tracking-wider px-4 py-3">Name</th>
                <th className="text-left text-white/50 text-xs uppercase tracking-wider px-4 py-3">Email</th>
                <th className="text-left text-white/50 text-xs uppercase tracking-wider px-4 py-3">Phone</th>
                <th className="text-left text-white/50 text-xs uppercase tracking-wider px-4 py-3">Subject</th>
                <th className="text-left text-white/50 text-xs uppercase tracking-wider px-4 py-3">Status</th>
                <th className="text-left text-white/50 text-xs uppercase tracking-wider px-4 py-3">Date</th>
                <th className="text-left text-white/50 text-xs uppercase tracking-wider px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center text-white/50 py-8">
                    No leads found
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead._id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="text-white px-4 py-3">{lead.name}</td>
                    <td className="text-white/70 px-4 py-3">{lead.email}</td>
                    <td className="text-white/70 px-4 py-3">{lead.phone || '-'}</td>
                    <td className="text-white/70 px-4 py-3 truncate max-w-xs">{lead.subject}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="text-white/50 text-sm px-4 py-3">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openModal(lead)}
                          className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded transition-colors"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(lead._id)}
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lead Detail Modal */}
      {showModal && selectedLead && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif text-white">Lead Details</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-white/50 text-sm mb-1">Name</p>
                  <p className="text-white">{selectedLead.name}</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Email</p>
                  <p className="text-white">{selectedLead.email}</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Phone</p>
                  <p className="text-white">{selectedLead.phone || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Subject</p>
                  <p className="text-white">{selectedLead.subject}</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Message</p>
                  <p className="text-white">{selectedLead.message}</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <select
                      value={selectedLead.status}
                      onChange={(e) => handleStatusUpdate(selectedLead._id, e.target.value)}
                      className="bg-[#0b0b0c] border border-white/20 rounded px-3 py-2 text-white focus:outline-none focus:border-[#B08D57]"
                    >
                      <option value="pending">Pending</option>
                      <option value="read">Read</option>
                      <option value="responded">Responded</option>
                    </select>
                  </div>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Submitted On</p>
                  <p className="text-white">
                    {new Date(selectedLead.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => handleDelete(selectedLead._id)}
                  className="px-4 py-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors"
                >
                  Delete Lead
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-white/10 text-white rounded hover:bg-white/20 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
