import React from 'react';

import { Card, Button, CardTitle, CardText } from 'reactstrap';

export default function SubscribeToNewsLetter() {

    return (
        <div>
            <Card body>
                <CardTitle>Subcribe</CardTitle>
                <CardText>Want to hear from us more? Subscribe to recieve emails about our articles.</CardText>
                <Button>Subscribe Now</Button>
            </Card>
        </div>
    )
}