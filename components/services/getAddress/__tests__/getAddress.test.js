import { GetAddressService } from '..'

describe('GetAddress Service', () => {
  test('it should fix the address array', () => {
    const input = ['London , , , , someStreet']
    const output = [
      {
        id: 0,
        name: 'London , someStreet'
      }
    ]
    expect(GetAddressService.fixAddresses(input)).toEqual(output)
  })

  test('It should get the address for postal code="SW19 2EZ" with a callback', async () => {
    const POSTAL_CODE = 'SW19 2EZ'
    const callFunc = (data) => {
      expect(data.hasError).toEqual(false)
      expect.assertions(1)
    }
    GetAddressService.getAddresses({
      callback: callFunc,
      postCode: POSTAL_CODE,
      callThrottle: 0
    })
  })
})
