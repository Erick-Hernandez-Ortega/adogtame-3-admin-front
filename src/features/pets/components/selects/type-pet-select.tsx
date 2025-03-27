import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/shared/components/ui/select";

export const TypePetSelect = ({ name }: { name: string }) => {
    return (
        <Select name={name} required>
            <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Selecciona un tipo de mascota" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Tipo de mascota</SelectLabel>
                    <SelectItem value="Dog">Perro</SelectItem>
                    <SelectItem value="Cat">Gato</SelectItem>
                    <SelectItem value="Other">Otro</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}