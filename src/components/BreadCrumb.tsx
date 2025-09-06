const BreadCrumb = ({ path }) => {
  const pathSegments = path.split('/').filter(Boolean);

  return (
    <nav aria-label="breadcrumb" className="text-sm mb-4">
      <ol className="flex space-x-2">
        {/* Home Icon */}
        <li>
          <a href="/" className="flex items-center hover:text-blue-500" title="Home">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" class="bi bi-house-fill">
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#6A5ACD', stopOpacity: '1'}}/>
                  <stop offset="100%" style={{stopColor: '#FF1493', stopOpacity: '1'}} />
                </linearGradient>
              </defs>
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" fill="url(#gradient1)" />
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" fill="url(#gradient1)" />
            </svg>
          </a>
        </li>

        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const to = '/' + pathSegments.slice(0, index + 1).join('/');

          return (
            <li key={index} className="flex items-center">
              <span className="mx-2 ">/</span>
              {isLast ? (
                <span className="">{segment}</span>
              ) : (
                <a href={to} className="text-blue-600 hover:underline">
                  {segment}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb ;
