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
                    <SelectItem value="little">Chico</SelectItem>
                    <SelectItem value="medium">Mediano</SelectItem>
                    <SelectItem value="large">Grande</SelectItem>
                    <SelectItem value="veryLarge">Muy grande</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}