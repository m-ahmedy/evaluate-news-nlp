import { checkValidUrl } from '../src/client/js/urlValidator'

describe('Check urlValidator Module', () => {
    test('checkValidUrl should be defined', () => {
        expect(checkValidUrl).toBeDefined()
    })

    test('Should return valid urls', () => {
        const validUrls = [
            'https://en.wikipedia.org/wiki/String_interpolation',
            'developers.google.com/web/fundamentals/primers/service-workers'
        ]

        validUrls.forEach(url => {
            expect(checkValidUrl(url)).toBeTruthy()
        })
    })

    test('Should return invalid urls', () => {
        const invalidUrls = [
            'Hello world',
            'Mahmoud'
        ]

        invalidUrls.forEach(url => {
            expect(checkValidUrl(url)).toBeFalsy()
        })
    })
})
