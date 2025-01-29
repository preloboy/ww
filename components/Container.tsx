
import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <SafeAreaView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            {children}
        </SafeAreaView>
    );
};

export default Container;