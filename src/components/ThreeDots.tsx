import MoreVertIcon from "@mui/icons-material/MoreVert";
export function ThreeDots({ children }: { children: React.ReactNode }) {
  return (
    <details className="dropdown">
      <summary className="btn m-1 bg-transparent border-none hover:bg-transparent hover:border-none">
        <MoreVertIcon />
      </summary>
      <ul className="menu dropdown-content bg-gray-200 absolute top-full left-0 z-50 shadow-lg">
        {children}
      </ul>
    </details>
  );
}
