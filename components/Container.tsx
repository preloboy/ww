import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <SafeAreaView className='px-5 py-2' >
            {children}
        </SafeAreaView>
    );
};

export default Container;