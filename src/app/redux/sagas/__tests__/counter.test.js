import { takeLatest, call, put } from 'redux-saga/effects'
import { runSaga } from 'redux-saga'
import { incrementStart, increment } from '../../slices/counter/counterSlice'
import { handleIncrementCounter } from '../counterSaga'
import { fetchCount } from '../../api/counterAPI'

jest.mock('../../api/counterAPI');
fetchCount.mockImplementation(() => 1);

export const runSagaMock = async ({initialState, saga, initialAction}) => {
    const dispatched = []
    const resp = await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => initialState || {},
      },
      saga,
      initialAction,
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
    let generator = null;
    beforeAll(() => {
       generator = handleIncrementCounter(1);
    });

    test('should call the fetchCount function', async () => {
      const expected = call(fetchCount, undefined);
      const actual = generator.next();
      
      expect(actual.value).toEqual(expected);
  });

    test('should put increment actions', async () => {
      const expected = put(increment());
      const actual = generator.next();      
      expect(actual.value).toEqual(expected);
  });


    test('Should put incrementStart action, call fetchCount and put increment action with payload', async () => { 
     
      const {dispatched } = await runSagaMock({
            saga: handleIncrementCounter,
            initialAction: incrementStart,
          })
          
        expect(dispatched[0]).toEqual(increment())
    })

  })
})