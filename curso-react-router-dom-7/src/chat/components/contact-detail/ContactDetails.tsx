import { getClient } from '@/fake/fake-data';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { NoContactSelected } from '../NoContactSelected';
import { ContactList } from '../ContactList';
import { ContactInfoSkeleton } from './ContactInfoSkeleton';
import { ContactInfo } from './ContactInfo';

export const ContactDetails = () => {
  const { clientId } = useParams();

  const { data: client, isLoading } = useQuery({
    queryKey: ['client', clientId],
    queryFn: () => getClient(clientId ?? ''),
    staleTime: 1000 * 60 * 5, // 5 minutes - Considera el query fresco por 5 minutos, después vuelve a ejecutar la petición
    enabled: !!clientId,
  });

  if (!clientId) {
    return <NoContactSelected></NoContactSelected>;
  }

  if (isLoading && !client) {
    return <ContactInfoSkeleton></ContactInfoSkeleton>;
  }

  return <ContactInfo client={client!}></ContactInfo>;
};
