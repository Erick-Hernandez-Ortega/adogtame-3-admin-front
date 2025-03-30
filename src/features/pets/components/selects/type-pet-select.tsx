import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import translatePet from "@/shared/transformers/translate-pet.transformer";

interface Props {
    name: string;
    value?: string;
}

export const TypePetSelect = ({ name, value }: Props) => {
    const typeValue: string | undefined = value ? translatePet(value) : undefined;

    return (
        <Select name={name} required value={typeValue}>
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