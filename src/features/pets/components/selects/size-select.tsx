import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/shared/components/ui/select";


export const SizeSelect = ({ name }: { name: string }) => {
    return (
        <Select name={name} required>
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