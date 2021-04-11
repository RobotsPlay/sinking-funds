import { Card, Container, Grid, Header, Menu } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
    return (
        <Container>
            <Menu  size="massive" color="teal">
                <Menu.Item name="Accounts" active />
            </Menu>
    
            <div className="account-group">
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as="h2">Jack</Header>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Card>
                                <Card.Content>
                                    <Card.Header>Jack Spending</Card.Header>
                                    <Header as="h2">$15.15</Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column>
                            <Card>
                                <Card.Content>
                                    <Card.Header>Jack Saving</Card.Header>
                                    <Header as="h2">$55.50</Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column>
                            <Card>
                                <Card.Content>
                                    <Card.Header>Jack Giving</Card.Header>
                                    <Header as="h2">$55.50</Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

            <div className="account-group">
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as="h2">Ellen</Header>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Card>
                                <Card.Content>
                                    <Card.Header>Ellen Spending</Card.Header>
                                    <Header as="h2">$15.56</Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column>
                            <Card>
                                <Card.Content>
                                    <Card.Header>Ellen Saving</Card.Header>
                                    <Header as="h2">$55.50</Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column>
                            <Card>
                                <Card.Content>
                                    <Card.Header>Ellen Giving</Card.Header>
                                    <Header as="h2">$55.50</Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </Container>
    );
}

export default App;
