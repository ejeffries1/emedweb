import { Card, CardHeader, Container } from "reactstrap"

const UserInfo = () => {
    return (
        <Container style={{padding: 25}}>
            <Card>
                <CardHeader><h2>Evan Jeffries</h2></CardHeader>
                <h4>Date of Birth: 06/20/1989</h4>
                <h4>Email: ejeffries@emed.org</h4>
            </Card>
        </Container>
    )
}

export default UserInfo;