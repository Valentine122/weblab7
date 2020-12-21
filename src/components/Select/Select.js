import React from 'react'
import { SelectForm, SelectBox, Option } from './Select.styled'

export default function Select() {
    return (
       <SelectForm>
           <SelectBox name='byType'>
                <Option>Any Type</Option>
                <Option>Spare parts</Option>
                <Option>Wheels</Option>
                <Option>Our Professional Combiners</Option>
                <Option>Master Class</Option>
                <Option>Combine Repair</Option>
                <Option>Rent Combine</Option>
                <Option>Combine Sale</Option>
            </SelectBox>
            <SelectBox name='byPrice'>
                <Option>Any Price</Option>
                <Option>By lowest price</Option>
                <Option>By biggest price</Option>
            </SelectBox>
            <SelectBox name='byCondition'>
                <Option>Any Condition</Option>
                <Option>Used</Option>
                <Option>New</Option>
            </SelectBox>
       </SelectForm>
    )
}
