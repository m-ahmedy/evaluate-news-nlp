import { handleSubmit } from '../src/client/js/formHandler'

describe('Check urlValidator Module', () => {
    test('handleSubmit should be defined', () => {
        expect(handleSubmit).toBeDefined()
    })
})
