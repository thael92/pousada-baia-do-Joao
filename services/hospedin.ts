export const BASE_URL = 'https://pms.hospedin.com';
export const TOKEN = import.meta.env.VITE_HOSPIN_TOKEN || '';
export const ACCOUNT_ID = import.meta.env.VITE_HOSPIN_ACCOUNT_ID || '276178';

// Temporary mapping: you can link Hospedin's 'place_type_id' with 'room.id' from constants.ts
export const ROOM_TO_PLACE_TYPE: Record<number, string> = {
    101: 'place_type_101',
    102: 'place_type_102',
    103: 'place_type_103',
    104: 'place_type_104',
    105: 'place_type_105',
    106: 'place_type_106',
    107: 'place_type_107',
    108: 'place_type_108',
    109: 'place_type_109',
    110: 'place_type_110',
};

export interface AvailabilityData {
    date: string;
    rate_price: number;
    availability: number;
}

export const fetchAvailabilities = async (placeTypeId: string, checkIn: string, checkOut: string): Promise<AvailabilityData[]> => {
    if (!TOKEN || !ACCOUNT_ID) {
        console.warn('Hospedin API token or account ID is missing.');
        return [];
    }

    try {
        const url = `${BASE_URL}/api/v2/${ACCOUNT_ID}/place_types/${placeTypeId}/rates_and_availabilities?begin_date=${checkIn}&end_date=${checkOut}`;
        const res = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) {
            console.error(`Error fetching availabilities: ${res.statusText}`);
            return [];
        }

        const data = await res.json();
        return data as AvailabilityData[];
    } catch (e) {
        console.error('Error connecting to Hospedin API:', e);
        return [];
    }
}
