import { makeStyles } from "@styles";

export const useLocalStyles = makeStyles()((theme) => ({
  /* ---------------- Root Container ---------------- */

  container: {
    width: '100%',
    height: 600,
    border: '1px solid #ddd',
    fontFamily: 'sans-serif',
    display: 'grid',
    gridTemplateColumns: '280px 1fr',
    position: 'relative',
    backgroundColor: '#fff',
  },

  /* ---------------- Left Panel ---------------- */

  panel: {
    padding: theme.spacing(2),
    borderRight: '1px solid #ddd',
    backgroundColor: '#fafafa',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    overflowY: 'auto',
  },

  panelTitle: {
    fontWeight: 600,
    fontSize: 16,
    borderBottom: '1px solid #eee',
    paddingBottom: theme.spacing(1),
  },

  /* ---------------- Canvas Area ---------------- */

  canvasArea: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },

  canvasHeader: {
    height: 48,
    borderBottom: '1px solid #eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `0 ${theme.spacing(2)}px`,
    backgroundColor: '#fcfcff',
  },

  headerTitle: {
    fontWeight: 600,
  },

  configButton: {
    padding: '6px 10px',
    borderRadius: 4,
    border: '1px solid #d0d7ff',
    backgroundColor: '#f5f7ff',
    cursor: 'pointer',
    fontWeight: 500,
  },

  cyWrapper: {
    flexGrow: 1,
  },

  /* ---------------- Overlay ---------------- */

  overlayBackdrop: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 10,
  },

  /* ---------------- Side Modal ---------------- */

  sideModal: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: 380,
    backgroundColor: '#fafafa',
    borderLeft: '1px solid #ddd',
    boxShadow: '-4px 0 12px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 11,
  },

  sideModalHeader: {
    padding: theme.spacing(2),
    fontWeight: 600,
    fontSize: 16,
    borderBottom: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f7ff',
  },

  closeButton: {
    cursor: 'pointer',
    fontWeight: 600,
  },

  sideModalBody: {
    padding: theme.spacing(2),
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },

  /* ---------------- Form Controls ---------------- */

  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
  },

  inputField: {
    padding: '6px 8px',
    border: '1px solid #ccc',
    borderRadius: 4,
  },

  checkboxRow: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },

  addButton: {
    padding: '6px 10px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: 4,
    cursor: 'pointer',
  },
  epsilonButton: {
    marginTop: 6,
    padding: '4px 8px',
    borderRadius: 4,
    border: '1px solid #6a1b9a',
    backgroundColor: '#f3e5f5',
    color: '#6a1b9a',
    fontWeight: 600,
    cursor: 'pointer',
    width: 'fit-content',
  },
}));
