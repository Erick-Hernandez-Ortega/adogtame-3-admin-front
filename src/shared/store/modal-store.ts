import { User } from '@/features/users/types/user.types';
import { create } from 'zustand'

interface ModalState {
    isVisibleModalUserEdit: boolean;
    selectedUser: User | null;
    openEditModalUser: (user: User) => void;
    closeEditModalUser: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
   isVisibleModalUserEdit: false,
   selectedUser: null,
   openEditModalUser: (user: User) => set({ isVisibleModalUserEdit: true, selectedUser: user }),
   closeEditModalUser: () => set({ isVisibleModalUserEdit: false, selectedUser: null }),
}));
