import { ProvinsiDescription } from '@/components/data-wilayah/provinsi/provinsi-description';
import { ProvinsiDisplayData } from '@/components/data-wilayah/provinsi/provinsi-display-data';
import { ProvinsiPagination } from '@/components/data-wilayah/provinsi/provinsi-pagination';
import LimitPerPage from '@/components/ui/limit-per-page';
import ResponseTypeSwitch from '@/components/ui/response-type';
import useGetProvinsi from '@/hooks/get-provinsi/use-get-provinsi';
import { useIsMobile } from '@/hooks/use-mobile';
import useParams from '@/hooks/use-params';
import { useIsTablet } from '@/hooks/use-tablet';
import { cn } from '@/lib/utils';

// Komponen utama
export const Provinsi = () => {
  const { params } = useParams();
  const { data, isError, isLoading, isSuccess, isPending } =
    useGetProvinsi(params);

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
        Data Wilayah - Provinsi
      </h1>

      <ProvinsiDescription />

      <div className="mb-10 flex w-full justify-between">
        <ResponseTypeSwitch />
        <LimitPerPage />
      </div>

      <div className="mb-10 flex w-full flex-col justify-between gap-3">
        <ProvinsiDisplayData
          data={data}
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isPending={isPending}
        />
        <div className="w-fit self-center">
          <ProvinsiPagination
            data={data}
            isLoading={isLoading}
            isPending={isPending}
          />
        </div>
      </div>
    </section>
  );
};
