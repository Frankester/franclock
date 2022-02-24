
export const useTime = ({ hour24 = null, today = new Date() , startCh=null}) => {
    let time

    if(startCh=== null && hour24 !== null) {
      time = today.toLocaleTimeString('any', { 
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: !hour24
      })
    } else {
      time = '00:00:00'
    }

    return {
      time
      
    }
  }