import React, { useState } from 'react';
import { X, Plus, Edit, Trash2, Home, Save } from 'lucide-react';
import { RoomItem } from '../../types';

interface AdminPanelProps {
  rooms: RoomItem[];
  onUpdateRooms: (rooms: RoomItem[]) => void;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ rooms, onUpdateRooms, onClose }) => {
  const [editingRoom, setEditingRoom] = useState<RoomItem | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState<Partial<RoomItem>>({
    name: '',
    image: '',
    features: [],
    price: '',
    numericPrice: 0,
    capacity: 2
  });
  const [featureInput, setFeatureInput] = useState('');

  const handleAddOrEdit = () => {
    if (!formData.name || !formData.price || !formData.numericPrice) {
      alert("Por favor, preencha os campos obrigatórios.");
      return;
    }

    let updatedRooms: RoomItem[];
    if (editingRoom) {
      updatedRooms = rooms.map(r => r.id === editingRoom.id ? { ...r, ...formData } as RoomItem : r);
    } else {
      const newRoom: RoomItem = {
        ...(formData as RoomItem),
        id: Date.now(), // Simple unique ID
      };
      updatedRooms = [...rooms, newRoom];
    }

    onUpdateRooms(updatedRooms);
    resetForm();
  };

  const handleDelete = (id: number) => {
    if (confirm("Tem certeza que deseja excluir esta suíte?")) {
      const updatedRooms = rooms.filter(r => r.id !== id);
      onUpdateRooms(updatedRooms);
    }
  };

  const resetForm = () => {
    setEditingRoom(null);
    setIsFormOpen(false);
    setFormData({
      name: '',
      image: '',
      features: [],
      price: '',
      numericPrice: 0,
      capacity: 2
    });
    setFeatureInput('');
  };

  const openEdit = (room: RoomItem) => {
    setEditingRoom(room);
    setFormData(room);
    setFeatureInput(room.features.join(', '));
    setIsFormOpen(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-emerald-950/90 backdrop-blur-md" onClick={onClose}></div>

      {/* Panel */}
      <div className="bg-white w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-pousada-green p-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Home size={24} className="text-pousada-gold" />
            <h2 className="font-serif text-2xl font-bold">Painel Administrativo - Suítes</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-6 bg-gray-50">
          {!isFormOpen ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-gray-700 font-bold uppercase tracking-widest text-sm">Listagem de Acomodações</h3>
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="bg-pousada-gold text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold hover:bg-emerald-700 transition-all shadow-md"
                >
                  <Plus size={18} /> Nova Suíte
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {rooms.map(room => (
                  <div key={room.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col group">
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                        <img src={room.image} className="w-full h-full object-cover" alt="" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button onClick={() => openEdit(room)} className="bg-white p-2 rounded-full text-blue-600 hover:scale-110 transition-transform"><Edit size={16} /></button>
                            <button onClick={() => handleDelete(room.id)} className="bg-white p-2 rounded-full text-red-600 hover:scale-110 transition-transform"><Trash2 size={16} /></button>
                        </div>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">{room.name}</h4>
                    <p className="text-xs text-pousada-green font-bold mb-2">{room.price}</p>
                    <div className="flex gap-2 mt-auto">
                        <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500">Cap: {room.capacity}</span>
                        <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500">ID: {room.id}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
               <h3 className="font-serif text-2xl font-bold text-pousada-green mb-6">
                {editingRoom ? 'Editar Suíte' : 'Cadastrar Nova Suíte'}
               </h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Nome da Suíte *</label>
                    <input 
                        type="text" 
                        placeholder="Ex: Suíte Deluxe Vista Mar"
                        className="w-full border border-gray-200 rounded-lg p-2.5 focus:ring-2 focus:ring-pousada-green/20 outline-none text-sm"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                 </div>

                 <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">URL da Imagem</label>
                    <input 
                        type="text" 
                        placeholder="Link da foto (picsum, etc)"
                        className="w-full border border-gray-200 rounded-lg p-2.5 focus:ring-2 focus:ring-pousada-green/20 outline-none text-sm"
                        value={formData.image}
                        onChange={e => setFormData({...formData, image: e.target.value})}
                    />
                 </div>

                 <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Preço Exibido *</label>
                    <input 
                        type="text" 
                        placeholder="Ex: R$ 490 diária"
                        className="w-full border border-gray-200 rounded-lg p-2.5 focus:ring-2 focus:ring-pousada-green/20 outline-none text-sm"
                        value={formData.price}
                        onChange={e => setFormData({...formData, price: e.target.value})}
                    />
                 </div>

                 <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Valor Numérico (Cálculo) *</label>
                    <input 
                        type="number" 
                        placeholder="Ex: 490"
                        className="w-full border border-gray-200 rounded-lg p-2.5 focus:ring-2 focus:ring-pousada-green/20 outline-none text-sm"
                        value={formData.numericPrice}
                        onChange={e => setFormData({...formData, numericPrice: Number(e.target.value)})}
                    />
                 </div>

                 <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Capacidade Máxima *</label>
                    <select 
                        className="w-full border border-gray-200 rounded-lg p-2.5 focus:ring-2 focus:ring-pousada-green/20 outline-none text-sm bg-white"
                        value={formData.capacity}
                        onChange={e => setFormData({...formData, capacity: Number(e.target.value)})}
                    >
                        {[1,2,3,4,5,6].map(v => <option key={v} value={v}>{v} Hóspedes</option>)}
                    </select>
                 </div>

                 <div className="space-y-1 md:col-span-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Características (separadas por vírgula)</label>
                    <textarea 
                        placeholder="Ex: Vista Mar, Ar Condicionado, Café da Manhã"
                        className="w-full border border-gray-200 rounded-lg p-2.5 focus:ring-2 focus:ring-pousada-green/20 outline-none text-sm h-24"
                        value={featureInput}
                        onChange={e => {
                            setFeatureInput(e.target.value);
                            setFormData({...formData, features: e.target.value.split(',').map(f => f.trim()).filter(f => f !== '')});
                        }}
                    />
                 </div>
               </div>

               <div className="flex gap-4 mt-8">
                  <button 
                    onClick={resetForm}
                    className="flex-1 py-3 border border-gray-200 text-gray-500 rounded-xl font-bold uppercase tracking-widest hover:bg-gray-50 transition-all"
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={handleAddOrEdit}
                    className="flex-1 py-3 bg-pousada-green text-white rounded-xl font-bold uppercase tracking-widest hover:bg-pousada-gold transition-all flex items-center justify-center gap-2"
                  >
                    <Save size={18} /> {editingRoom ? 'Salvar Alterações' : 'Cadastrar Suíte'}
                  </button>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};