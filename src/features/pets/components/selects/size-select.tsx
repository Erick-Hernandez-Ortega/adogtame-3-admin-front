import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { translatePetSize } from "@/shared/transformers/translate-pet.transformer";

interface Props {
    name: string;
    value?: string;
}

export const SizeSelect = ({ name, value }: Props) => {
    const sizeValue: string | undefined = value ? translatePetSize(value) : undefined;

    return (
        <Select name={name} required value={sizeValue}>
            <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Selecciona un tamaño" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Tamaños</SelectLabel>
                    <SelectItem value="Little">Chico</SelectItem>
                    <SelectItem value="Medium">Mediano</SelectItem>
                    <SelectItem value="Large">Grande</SelectItem>
                    <SelectItem value="VeryLarge">Muy grande</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}