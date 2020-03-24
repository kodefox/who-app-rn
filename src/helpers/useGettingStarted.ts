import { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';

let FINISHED_ONBOARDING = 'WHO_FINISHED_ONBOARDING';

async function getHasFinishedOnboarding() {
  return AsyncStorage.getItem(FINISHED_ONBOARDING);
}

export async function setHasFinishedOnboarding() {
  return AsyncStorage.setItem(FINISHED_ONBOARDING, 'true');
}

/**
 * Determine whether current user is a returning user or not.
 * While loading, will return null instead of a boolean.
 */
export default function useGettingStarted(): boolean | null {
  let [isReturningUser, setIsReturningUser] = useState<boolean | null>(null);
  useEffect(() => {
    getHasFinishedOnboarding().then((hasFinished) => {
      if (hasFinished === 'true') {
        setIsReturningUser(true);
        return;
      }

      setIsReturningUser(false);
      setHasFinishedOnboarding();
    });
  }, []);
  return isReturningUser;
}
