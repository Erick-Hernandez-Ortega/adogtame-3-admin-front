import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/shared/components/ui/select";

export const SexSelect = ({ name }: { name: string }) => {
    return (
        <Select name={name} required>
            <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Selecciona el sexo de la mascota" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Sexo</SelectLabel>
                    <SelectItem value="Male">Macho</SelectItem>
                    <SelectItem value="Female">Hembra</SelectItem>
                    <SelectItem value="Unknown">Desconocido</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}