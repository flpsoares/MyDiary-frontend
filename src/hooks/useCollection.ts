import { useEffect, useMemo, useState } from 'react'
import { Collection } from '../services/helpers/Collection'
import useDebounce from './helpers/useDebounce'

export function useCollection<T>(collection: Collection<T>) {
  const [lastUpdate, setLastUpdate] = useState<number>(0)
  const lastUpdateDebounce = useDebounce(lastUpdate, 500)

  const items = useMemo(() => {
    return collection.all()
  }, [lastUpdateDebounce])

  const onForceUpdate = () => {
    setLastUpdate(Date.now())
  }

  useEffect(() => {
    collection.on('forceUpdate', onForceUpdate)
    return () => {
      collection.off('forceUpdate', onForceUpdate)
    }
  }, [])

  return { items }
}
