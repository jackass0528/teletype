let nextEditorProxyId = 1

module.exports =
class FakeEditorProxy {
  constructor (uri) {
    this.id = nextEditorProxyId++
    this.bufferProxy = {
      uri,
      dispose () {},
      setDelegate () {},
      createCheckpoint () {},
      groupChangesSinceCheckpoint () {},
      applyGroupingInterval () {},
      getHistory () {
        return {undoStack: [], redoStack: [], nextCheckpointId: 1}
      }
    }
  }

  dispose () {
    if (this.delegate) this.delegate.dispose()
  }

  follow () {}

  didScroll () {}

  setDelegate (delegate) {
    this.delegate = delegate
  }

  updateSelections () {}
}
