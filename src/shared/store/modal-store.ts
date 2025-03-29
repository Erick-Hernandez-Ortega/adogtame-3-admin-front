import { Pet } from '@/features/pets/types/pet.types';
import { User } from '@/features/users/types/user.types';
import { create } from 'zustand';

interface ModalState {
    // ? User
    isVisibleModalUserEdit: boolean;
    isVisibleModalUserRemove: boolean;
    selectedUser: User | null;
    openEditModalUser: (user: User) => void;
    openRemoveModalUser: (user: User) => void;
    closeEditModalUser: () => void;
    closeRemoveModalUser: () => void;

    // ? Pet
    isVisibleModalPetRemove: boolean;
    selectedPet: Pet | null;
    openModalRemovePet: (pet: Pet) => void;
    closeModalRemovePet: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
    // ? User
    isVisibleModalUserEdit: false,
    isVisibleModalUserRemove: false,
    selectedUser: null,
    openEditModalUser: (user: User) => set({ isVisibleModalUserEdit: true, selectedUser: user }),
    openRemoveModalUser: (user: User) => set({ isVisibleModalUserRemove: true, selectedUser: user }),
    closeEditModalUser: () => set({ isVisibleModalUserEdit: false, selectedUser: null }),
    closeRemoveModalUser: () => set({ isVisibleModalUserRemove: false, selectedUser: null }),

    // ? Pet
    selectedPet: null,
    isVisibleModalPetRemove: false,
    openModalRemovePet: (pet: Pet) => set({ isVisibleModalPetRemove: true, selectedPet: pet }),
    closeModalRemovePet: () => set({ isVisibleModalPetRemove: false, selectedPet: null }),
}));
