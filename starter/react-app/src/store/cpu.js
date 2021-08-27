const CPU_DATA = 'cpu/CPU_DATA';

const allCpu = (cpu) => ({
    type: CPU_DATA,
    payload: cpu
})

export const allCpuData = () => async (dispatch) => {
    const response = await fetch('/api/cpu/')
    if (response.ok) {
        const cpu = await response.json();
        return dispatch(allCpu(cpu));
    } 
}

export default function cpuReducer(state = {}, action) {

    switch (action.type) {
      case CPU_DATA:
        return action.payload.cpu;
      default:
        return state;
    }
  }
