import { CheckboxState } from "../../../services/interfaces";

type CheckboxBarProps = {
    checkboxes: CheckboxState,
    onCheckboxChange: (checkboName: keyof CheckboxState) => void
}

export default function CheckboxBar({checkboxes, onCheckboxChange}: CheckboxBarProps) {

    return (
        <>
            <div>
                <label htmlFor="red"> Red
                    <input type="checkbox" name="red" checked={checkboxes.red} onChange={() => onCheckboxChange('red')} />
                </label>
                <label htmlFor="blue"> Blue
                    <input type="checkbox" name="blue" checked={checkboxes.blue} onChange={() => onCheckboxChange('blue')} />
                </label>
                <label htmlFor="green"> Green
                    <input type="checkbox" name="green" checked={checkboxes.green} onChange={() => onCheckboxChange('green')} />
                </label>
                <label htmlFor="yellow"> Yellow
                    <input type="checkbox" name="yellow" checked={checkboxes.yellow} onChange={() => onCheckboxChange('yellow')} />
                </label>
            </div>
        </>
    )
}