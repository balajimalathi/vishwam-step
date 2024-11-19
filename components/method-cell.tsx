import { Activity, Github, Gitlab } from 'lucide-react';

export const MethodCell = ({ status }: { status: string }) => {
  var ripple = <></>;

  switch (status) {
    case 'GET':
      ripple = (
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-200 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400"></span>
        </span>
      );
      break;
    case 'POST':
      ripple = (
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-200 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
        </span>
      );
      break;
    case 'DELETE':
      ripple = (
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-200 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-red-400"></span>
        </span>
      );
      break;
    case 'PUT':
      ripple = (
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-200 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-400"></span>
        </span>
      );
      break;
    case 'PATCH':
      ripple = (
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-200 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-400"></span>
        </span>
      );
      break;
  }

  return (
    <>
      <div className="flex flex-row items-center gap-2">
        {ripple}
        {status}
      </div>
    </>
  );
};

export const RepoSourceCell = ({ status }: { status: string }) => {
  var ripple = <></>;

  switch (status) {
    case 'Github':
      ripple = <Github className="h-4 w-4" />;
      break;
    case 'GitLab':
      ripple = <Gitlab className="h-4 w-4" />;
      break;
    default:
      ripple = <Activity className="h-4 w-4" />;
      break;
  }

  return (
    <>
      <div className="flex flex-row items-center gap-2">
        {ripple}
        {status}
      </div>
    </>
  );
};
