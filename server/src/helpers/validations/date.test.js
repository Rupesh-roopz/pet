const { dateValidation } = require('./date');

describe('Search validation', () => {

    test('On valid search dates', async() => {
        const mockSearchDates = {
            from_date: '2021-12-20',
            to_date: '2021-12-31'
        }

        await dateValidation(mockSearchDates)
            .then(data => {
                console.log(data);
                expect(data).toBe(1)
            });
    });

    test('On invalid dates', async() => {
        try {
            const mockSearchDates = {
                from_date: '2021-12-20',
                to_date: '2021-12-12'
            }

            await dateValidation(mockSearchDates)
                .then(() => expect().toThrow());
        } catch (error) {
            expect(error).toEqual({
                message: 'please input date correctly'
            })
        }
    })
})