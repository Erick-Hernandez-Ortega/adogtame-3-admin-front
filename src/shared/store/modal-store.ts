import { User } from '@/features/users/types/user.types';
import { create } from 'zustand'

interface ModalState {
    isVisibleModalUserEdit: boolean;
    isVisibleModalUserRemove: boolean;
    selectedUser: User | null;
    openEditModalUser: (user: User) => void;
    openRemoveModalUser: (user: User) => void;
    closeEditModalUser: () => void;
    closeRemoveModalUser: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
   isVisibleModalUserEdit: false,
   isVisibleModalUserRemove: false,
   selectedUser: null,
   openEditModalUser: (user: User) => set({ isVisibleModalUserEdit: true, selectedUser: user }),
   openRemoveModalUser: (user: User) => set({ isVisibleModalUserRemove: true, selectedUser: user }),
   closeEditModalUser: () => set({ isVisibleModalUserEdit: false, selectedUser: null }),
   closeRemoveModalUser: () => set({ isVisibleModalUserRemove: false, selectedUser: null }),
}));
