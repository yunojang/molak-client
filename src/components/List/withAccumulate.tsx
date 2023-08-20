// import { FC, ReactNode, useState } from 'react';
// import { Spinner } from '../Elements/Spinner';

// interface LoadableListProps {
//   onSuccess?(content: any): void;
// }

// export const withAccumulate = <T extends LoadableListProps>(
//   ListComp: FC<T>,
//   params: { page: number },
//   fallback: ReactNode = <Spinner pad={12} size={44} color="#808080" />,
// ) => {
//   return function Inner(props: T) {
//     return <ListComp {...props} onSuccess={} />;
//   };
// };

// // 이제 스크롤 로드에서는 withAccumulate를 내부에서 사용할 거라 꼭 parmas로 주고받지 않고 params 배열을 직접 받으면 된다
// // 0 ~ 현재 페이지까지의 데이터를 누적해서 보여주는 방식이다 다만, 다음 페이지가 로드될 때 이전 페이지의 데이터가 유지되어야 한다.

// // // offset to page
// // const page = Math.floor(offset / size);
// // // page to offset
// // const offset = page * size;
