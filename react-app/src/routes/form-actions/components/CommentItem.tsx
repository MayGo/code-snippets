interface CommentItemProps {
    text: string;
    isOptimistic?: boolean;
}

export function CommentItem({ text, isOptimistic = false }: CommentItemProps) {
    return (
        <div className={`bg-white shadow-sm rounded-lg p-3 mb-2 ${isOptimistic ? 'opacity-50' : ''}`}>
            <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">{text.charAt(0).toUpperCase()}</span>
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-gray-800">{text}</p>
                    {isOptimistic && <span className="text-xs text-blue-600 mt-1 inline-block">Posting...</span>}
                </div>
            </div>
        </div>
    );
}
