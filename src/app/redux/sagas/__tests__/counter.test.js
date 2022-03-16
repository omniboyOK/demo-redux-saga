import { takeLatest } from 'redux-saga/effects'
import { runSaga } from 'redux-saga'
import { incrementStart, increment } from '../../slices/counter/counterSlice'
import { watchCounter, handleIncrementCounter } from '../counterSaga'
import { fetchCount } from '../../api/counterAPI'


export const runSagaMock = async ({initialState, saga, initalAction}) => {
    const dispatched = []
    const resp = await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => initialState || {},
      },
      saga,
      initalAction,
    )
    return {
      result: resp,
      dispatched,
    }
  }

describe('counter sagas', () => {


  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('incrementStartWorker:', () => {  
   
    test('Should put incrementStart action, call api and put increment action with payload', async () => {
        
       
        const {dispatched, result } = await runSagaMock({
            saga: handleIncrementCounter,
            initalAction: incrementStart(1),
            initialState: {
              counter: {
                isValid: false,
                value: 0
              },
            },
          })
        //TODO
          //expect(dispatched[0]).toEqual(increment())
    })

  })
})