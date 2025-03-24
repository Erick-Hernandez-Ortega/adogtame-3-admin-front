import { Label } from "@/shared/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";

export const StirilizedRadio = ({ name }: { name: string }) => {

    return (
        <RadioGroup defaultValue="false" name={name}>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="true" id="Yes" />
                <Label htmlFor="Yes">Si</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="false" id="No" />
                <Label htmlFor="No">No</Label>
            </div>
        </RadioGroup>
    );
}