import { Pet } from '@/features/pets/types/pet.types';
import { Publication } from '@/features/publications/types/publication.types';
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
    isVisibleModalPetEdit: boolean;
    selectedPet: Pet | null;
    openModalRemovePet: (pet: Pet) => void;
    closeModalRemovePet: () => void;
    openModalEditPet: (pet: Pet) => void;
    closeModalEditPet: () => void;

    // ? Publication
    isVisibleModalPublicationRemove: boolean;
    selectedPublication: Publication | null;
    openModalRemovePublication: (publication: Publication) => void;
    closeModalRemovePublication: () => void;
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
    isVisibleModalPetEdit: false,
    openModalRemovePet: (pet: Pet) => set({ isVisibleModalPetRemove: true, selectedPet: pet }),
    closeModalRemovePet: () => set({ isVisibleModalPetRemove: false, selectedPet: null }),
    openModalEditPet: (pet: Pet) => set({ isVisibleModalPetEdit: true, selectedPet: pet }),
    closeModalEditPet: () => set({ isVisibleModalPetEdit: false, selectedPet: null }),

    // ? Publication
    isVisibleModalPublicationRemove: false,
    selectedPublication: null,
    openModalRemovePublication: (publication: Publication) => set({ isVisibleModalPublicationRemove: true, selectedPublication: publication }),
    closeModalRemovePublication: () => set({ isVisibleModalPublicationRemove: false, selectedPublication: null }),
}));
