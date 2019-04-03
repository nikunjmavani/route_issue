import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, ButtonIcon } from "@rmwc/button";
import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerTitle,
  DrawerSubtitle
} from "@rmwc/drawer";
import { List, ListItem } from "@rmwc/list";
import PageOne from "./pageOne";
import PageTwo from "./pageTwo";
import { IconButton } from "@rmwc/icon-button";

import "@material/drawer/dist/mdc.drawer.css";
import "@material/button/dist/mdc.button.css";
import "@material/list/dist/mdc.list.css";
import "@material/icon-button/dist/mdc.icon-button.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }

  render() {
    return (
      <React.Fragment>
        <Drawer
          modal
          open={this.state.modalOpen}
          onClose={() => this.setState({ modalOpen: false })}
          className="drawer"
        >
          <DrawerHeader />
          <DrawerContent>
            <List>
              <ListItem>Page One</ListItem>
              <ListItem>Page Two</ListItem>
            </List>
          </DrawerContent>
        </Drawer>
        <IconButton
          icon="menu"
          onClick={() => this.setState({ modalOpen: !this.state.modalOpen })}
          raised
        />
          <div>
            <ul>
              <Link to="/pageOne">
                <Button>Page One</Button>
              </Link>
              <p />
              <Link to="/pageTwo">
                <Button>Page Two</Button>
              </Link>
            </ul>
          </div>
      </React.Fragment>
    );
  }
}

export default Home;
