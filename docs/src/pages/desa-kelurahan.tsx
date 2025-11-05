import DesaKelDescription from '@/components/data-wilayah/desa-kelurahan/desa-kel-description';
import { DesaKelDisplayData } from '@/components/data-wilayah/desa-kelurahan/desa-kel-display-data';
import { DesaKelPagination } from '@/components/data-wilayah/desa-kelurahan/desa-kel-pagination';
import LimitPerPage from '@/components/ui/limit-per-page';
import ResponseTypeSwitch from '@/components/ui/response-type';
import useGetDesaKelurahan from '@/hooks/get-desa-kelurahan/use-get-desa-kelurahan';
import { useIsMobile } from '@/hooks/use-mobile';
import useParams from '@/hooks/use-params';
import { useIsTablet } from '@/hooks/use-tablet';
import { cn } from '@/lib/utils';

export const DesaKelurahan = () => {
  const { params } = useParams();
  const { data, isError, isLoading, isSuccess, isPending } =
    useGetDesaKelurahan(params);

  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isSmallScreen = isMobile || isTablet;

  return (
    <section
      className={cn('max-w-5xl bg-white text-gray-800', {
        'p-5': isSmallScreen,
        'p-8': !isSmallScreen,
      })}
    >
      <h1 className="mb-10 text-3xl font-bold text-gray-700">
        Data Wilayah - Desa/Kelurahan
      </h1>

      <DesaKelDescription />

      <div className="mb-10 flex w-full justify-between">
        <ResponseTypeSwitch />
        <LimitPerPage />
      </div>

      <div className="mb-10 flex w-full flex-col justify-between gap-3">
        <DesaKelDisplayData
          data={data}
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isPending={isPending}
        />
        <div className="w-fit self-center">
          <DesaKelPagination
            data={data}
            isLoading={isLoading}
            isPending={isPending}
          />
        </div>
      </div>
    </section>
  );
};
