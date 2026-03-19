interface IframeModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export default function IframeModal({ isOpen, onClose, url }: IframeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-70 flex items-center justify-center">
      
      <div className="relative w-[95%] h-[90%] bg-white rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-black text-white px-4 py-2 rounded-full"
        >
          ✕
        </button>

        {/* Iframe */}
        <iframe
          src={url}
          className="w-full h-full border-none"
          title="External Page"
        />
      </div>
    </div>
  );
}