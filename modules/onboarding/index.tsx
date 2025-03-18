import { Image } from 'expo-image';
import React from 'react';

import { cssInterop } from 'nativewind';
import Onboarding from 'react-native-onboarding-swiper';
import { router } from 'expo-router';
import LocalStorage from '@/features/AsyncStorage/LocalStorage';

cssInterop(Image, { className: "style" })


export default function OnboardingScreen() {

    const onDone = React.useCallback(async () => {
        await LocalStorage.set('onboarding', true);
        router.replace('/home');
    }, []);

    return (
        <Onboarding onSkip={onDone} onDone={onDone} pages={[
            {
                backgroundColor: '#678FB4',
                image: <Image className="flex flex-col w-60 h-60" source={ {{{blue.image}}} } />,
                title: '{{blue.title}}',
                subtitle: '{{blue.subtitle}}'
            },
            {
                backgroundColor: '#ff9100',
                image: <Image className="flex flex-col w-60 h-60" source={ {{{orange.image}}} } />,
                title: '{{orange.title}}',
                subtitle: '{{orange.subtitle}}'
            },
            {
                backgroundColor: '#9B90BC',
                image: <Image className="flex flex-col w-60 h-60" source={ {{{purple.image}}} } />,
                title: '{{purple.title}}',
                subtitle: '{{purple.subtitle}}'
            },
            {
                backgroundColor: '#22bcb5',
                image: <Image className="flex flex-col w-60 h-60" source={ {{{green.image}}} } />,
                title: '{{green.title}}',
                subtitle: '{{green.subtitle}}'
            },
            {
                backgroundColor: '#FF8A80',
                image: <Image className="flex flex-col w-60 h-60" source={ {{{red.image}}} } />,
                title: '{{red.title}}',
                subtitle: '{{red.subtitle}}'
            },
        ]} />
    );
};
