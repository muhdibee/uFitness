import AsyncStorage from '@react-native-async-storage/async-storage';
import { formatCalendarResults, CALENDAR_STORAGE_KEY } from './_calendar'

export function fetchCalendarResults () {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then(formatCalendarResults)
}

export async function submitEntry ({ key, entry }) {
  try {
    await AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({[key]: entry}))
  } catch(e) {
    console.log("Error while submitting entry", e)
  }
}

export async function removeEntry (key) {
  const results = await AsyncStorage.getItem(CALENDAR_STORAGE_KEY);
  const data = JSON.parse(results);
  try {
    data[key] = undefined;
    delete data[key];
  } catch (e) {
    console.log("Error while Deleting", e);
  }
  try {
    await AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(newResult));
  } catch (e) {
    console.log("Error while saving", e);
  }
} 