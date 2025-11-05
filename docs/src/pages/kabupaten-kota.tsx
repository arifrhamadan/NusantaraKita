import { KabupatenKodeDescription } from '@/components/data-wilayah/kabupaten-kota/kabupaten-kota-description';
import { KabupatenKotaDisplayData } from '@/components/data-wilayah/kabupaten-kota/kabupaten-kota-display-data';
import { KabupatenKotaPagination } from '@/components/data-wilayah/kabupaten-kota/kabupaten-kota-pagination';
import LimitPerPage from '@/components/ui/limit-per-page';
import ResponseTypeSwitch from '@/components/ui/response-type';
import useGetKabKota from '@/hooks/get-kabupaten-kota/use-get-kab-kota';
import { useIsMobile } from '@/hooks/use-mobile';
import useParams from '@/hooks/use-params';
import { useIsTablet } from '@/hooks/use-tablet';
import { cn } from '@/lib/utils';

export const KabupatenKota = () => {
  const { params } = useParams();
  const { data, isError, isLoading, isSuccess, isPending } =
    useGetKabKota(params);

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
        Data Wilayah - Kabupaten/Kota
      </h1>

      <KabupatenKodeDescription />

      <div className="mb-10 flex w-full justify-between">
        <ResponseTypeSwitch />
        <LimitPerPage />
      </div>

      <div className="mb-10 flex w-full flex-col justify-between gap-3">
        <KabupatenKotaDisplayData
          data={data}
          isError={isError}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isPending={isPending}
        />
        <div className="w-fit self-center">
          <KabupatenKotaPagination
            data={data}
            isLoading={isLoading}
            isPending={isPending}
          />
        </div>
      </div>
    </section>
  );
};
