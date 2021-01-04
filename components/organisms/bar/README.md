Flexible bar component that can be used on any axis that is expandable and fixable.

## Links

[MUI App Bar](https://material-ui.com/components/app-bar/)<br />
[MUI Drawer](https://material-ui.com/components/drawers/#drawer)<br />
[Evegreen Slidesheet](https://evergreen.segment.com/components/side-sheet)

      <SideSheet
        isShown={state.isShown}
        onCloseComplete={() => setState({ isShown: false })}
      >
        <Paragraph margin={40}>Basic Example</Paragraph>
      </SideSheet>
