import { FormControl, FormErrorMessage, FormLabel, Select as ChakraSelect, InputProps as ChakraInputProps, SelectProps as ChakraSelectProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface SelectProps extends ChakraSelectProps {
    name: string;
    items: string[];
    label?: string;
    error?: FieldError
}

const SelectBase:ForwardRefRenderFunction<HTMLSelectElement, SelectProps>  = ({ name, items, label, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
            <ChakraSelect name={name}
                   id={name} 
                   focusBorderColor="pink.500"
                   bgColor="gray.900"
                   variant="filled"
                   _hover={{bgColor: 'gray.900'}} 
                   size="lg"
                   ref={ref}
                   {...rest}>
                { items.map(item => {
                    return (
                        <option value={ item }>{ item }</option>
                    )
                }) }
            </ChakraSelect>
                
            {!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>        
    );
}

export const Select = forwardRef(SelectBase);