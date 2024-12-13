// app/login/page.js
import { Button, Input, Stack } from '@chakra-ui/react';

export default function LoginPage() {
    return (
        <Stack spacing={4} maxWidth="400px" margin="0 auto" padding="10">
            <Input placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button colorScheme="blue">Login</Button>
        </Stack>
    );
}
