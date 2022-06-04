import React from "react";
import { Button, Dimmer, Divider, Grid, Header, Icon, Loader, Search, Segment, Image, Placeholder, List } from "semantic-ui-react";

const App = () => {
  return (
    <>
      <Segment placeholder>
        <Grid columns={2}>
          <Divider vertical>OR</Divider>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Header icon>
                <Icon name="search" />
                <p>Cari Document</p>
              </Header>
              <Search placeholder="Search document.." />
            </Grid.Column>

            <Grid.Column textAlign="center">
              <Header icon>
                <Icon name="file pdf outline" />
                <p>Tambah Document Baru</p>
              </Header>
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>

      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Segment>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <List>
              <List.Item as="h3">Website Terkait</List.Item>
              <List.Item
                icon="linkify"
                content={<a href="https://google.com" target="_blank" rel="noreferrer">Google</a>}
              />
              <List.Item
                icon="linkify"
                content={<a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>}
              />
              <List.Item
                icon="linkify"
                content={<a href="https://semantic-ui.com" target="_blank" rel="noreferrer">Semantic UI</a>}
              />
              <List.Item
                icon="linkify"
                content={<a href="https://niomic.id" target="_blank" rel="noreferrer">Niomic</a>}
              />
              <List.Item
                icon="linkify"
                content={<a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a>}
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
  );
}

export default App;