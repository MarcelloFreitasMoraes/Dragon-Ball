import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

import { InputComponent } from './Input'
import { IConditionProps } from './Input/type'

import { Form } from './styles'

export function FormComponent({ isSearch, isSend }: IConditionProps) {
    const [hero, setHero] = useState('')
    const [namePerson, setNamePerson] = useState()
    const router = useRouter()

    const onSubmitSearch = (event: FormEvent) => {
        event.preventDefault()

        router.push(`/Heroes?name=${namePerson}`)
    }

    return (
        <>
            {isSearch && (
                <Form onSubmit={onSubmitSearch}>
                    <InputComponent
                        placeholder="Busque por seu herói..."
                        value={namePerson}
                        onClick={() => {
                            setHero(hero)
                            router.push(`/Heroes?name=${namePerson}`)
                        }}
                        onChange={(e: any) => setNamePerson(e.target.value)}
                        iconSearch
                    />
                </Form>
            )}
        </>
    )
}
